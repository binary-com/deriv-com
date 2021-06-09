import { useRef, useState } from 'react'
import { useOutsideClick } from 'components/hooks/outside-click'

export const useDropdownHooks = (onChange) => {
    const [is_open, setOpen] = useState(false)
    const dropdown_ref = useRef(null)
    const nodes = new Map()

    useOutsideClick(dropdown_ref, () => setOpen(false))

    const toggleListVisibility = (e) => {
        const open_dropdown = e.key === 'Space' || e.key === 'Enter' || e.key === 'Tab'

        // adding each item nodes a listener (click and keys)
        // and filter if there is null nodes in the array
        Array.from(nodes.values())
            .filter((node) => node !== null)
            .forEach((node) => addItemListener(node))

        if (e.key === 'Escape') {
            closeList()
        }
        if (e.type === 'click' || open_dropdown) {
            setOpen(!is_open)
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            focusNextListItem(e)
        }
    }

    const closeList = () => setOpen(false)

    const focusNextListItem = (event) => {
        const active_element = document.activeElement

        if (active_element.id === 'selected_dropdown') {
            Array.from(nodes.values())[0].focus()
        } else {
            const active_nodes = event.target
            if (active_nodes) {
                if (event.key === 'ArrowDown') {
                    active_nodes.nextSibling && active_nodes.nextSibling.focus()
                } else if (event.key === 'ArrowUp') {
                    active_nodes.previousSibling && active_nodes.previousSibling.focus()
                }
            }
        }
    }

    const addItemListener = (node) => {
        node.addEventListener('keydown', (e) => {
            e.preventDefault()
            if (e.key === 'Escape') {
                closeList()
            } else {
                focusNextListItem(e)
            }
        })
    }

    const handleChange = (option) => {
        onChange(option)
        closeList()
    }

    return [is_open, dropdown_ref, nodes, handleChange, toggleListVisibility, setOpen]
}
