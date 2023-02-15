import useBreakpoints from './use-breakpoints'

// HINT: We will add more values to the hook in the future,
// so for the type handling for now I'll just alias the type
type TVisiblity = ReturnType<typeof useBreakpoints>

const useScreenSize = (): TVisiblity => {
    const breakpoints = useBreakpoints()
    return breakpoints
}

export default useScreenSize
