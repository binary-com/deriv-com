// import PropTypes from 'prop-types'
// import React from 'react'
// import {
//     addDays,
//     daysFromTodayTo,
//     toMoment,
//     convertDateFormat,
//     getPosition,
//     isMobile,
// } from '@deriv/shared'
// import MobileWrapper from '../mobile-wrapper'
// import DesktopWrapper from '../desktop-wrapper'
// import Input from './date-picker-input.jsx'
// import Calendar from './date-picker-calendar.jsx'
// import Native from './date-picker-native.jsx'
// import { localize } from 'components/localization'

// const DateOfBirthPicker = ({ value }) => {
//     const [max_date] = React.useState(toMoment().subtract(18, 'years'))
//     const [min_date] = React.useState(toMoment().subtract(100, 'years'))
//     return (
//         <DatePicker
//             id={'birth_day'}
//             name="date_of_birth"
//             label={localize('Date of birth*')}
//             error={errors.date_of_birth}
//             onBlur={() => setTouched({ date_of_birth: true })}
//             onChange={({ target }) =>
//                 setFieldValue(
//                     'date_of_birth',
//                     target?.value ? toMoment(target.value).format('YYYY-MM-DD') : '',
//                     true,
//                 )
//             }
//             disabled={!isChangeableField('date_of_birth')}
//             value={values.date_of_birth}
//             calendar_view="year"
//             display_format="DD-MM-YYYY"
//             max_date={max_date}
//             min_date={min_date}
//             readOnly
//         />
//     )
// }

// const DatePicker = React.memo((props) => {
//     const {
//         date_format,
//         disabled,
//         display_format,
//         error,
//         footer,
//         id,
//         label,
//         has_range_selection,
//         mode,
//         max_date,
//         min_date,
//         start_date,
//         name,
//         onBlur,
//         onChange,
//         onFocus,
//         portal_id,
//         placeholder,
//         required,
//         type,
//         value,
//         data_testid,
//         ...other_props
//     } = props

//     const datepicker_ref = React.useRef()
//     const calendar_ref = React.useRef()
//     const calendar_el_ref = React.useRef()
//     const [placement, setPlacement] = React.useState('')
//     const [style, setStyle] = React.useState({})
//     const [date, setDate] = React.useState(value ? toMoment(value).format(display_format) : '')
//     const [duration, setDuration] = React.useState(daysFromTodayTo(value))
//     const [is_datepicker_visible, setIsDatepickerVisible] = React.useState(false)
//     const [is_placeholder_visible, setIsPlaceholderVisible] = React.useState(placeholder && !value)

//     React.useEffect(() => {
//         if (
//             is_datepicker_visible &&
//             datepicker_ref.current &&
//             calendar_el_ref.current &&
//             portal_id
//         ) {
//             const position_style = getPosition({
//                 preferred_alignment: 'bottom',
//                 parent_el: datepicker_ref.current,
//                 child_el: calendar_el_ref.current,
//                 should_consider_parent_height: false,
//             })
//             setStyle(position_style.style)
//             setPlacement(position_style.placement)
//         }
//     }, [is_datepicker_visible, portal_id])

//     React.useEffect(() => {
//         if (value) setDate(toMoment(value).format(display_format))
//     }, [value, display_format, setDate])

//     React.useEffect(() => {
//         if (duration !== value) {
//             setDuration(daysFromTodayTo(value))
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [value])

//     const handleVisibility = () => {
//         setIsDatepickerVisible(!is_datepicker_visible)
//     }

//     const onHover = (hovered_date) => {
//         if (typeof onChange === 'function') {
//             onChange({
//                 date: toMoment(hovered_date).format(display_format),
//                 duration: mode === 'duration' ? daysFromTodayTo(hovered_date) : null,
//             })
//         }
//     }

//     const onSelectCalendar = (selected_date, is_visible = true) => {
//         const new_date = toMoment(selected_date).format(display_format)
//         const new_duration = mode === 'duration' ? daysFromTodayTo(selected_date) : null

//         setDate(new_date)
//         setDuration(new_duration)
//         setIsDatepickerVisible(is_visible)
//         setIsPlaceholderVisible(false)

//         if (typeof onChange === 'function') {
//             onChange({
//                 date: new_date,
//                 duration: new_duration,
//                 target: {
//                     name,
//                     value: getTargetValue(new_date, new_duration),
//                 },
//             })
//         }
//     }

//     const onSelectCalendarNative = (selected_date) => {
//         const new_date = selected_date ? toMoment(selected_date).format(display_format) : null

//         setDate(new_date)

//         if (typeof onChange === 'function') {
//             onChange({
//                 target: {
//                     name,
//                     value: getTargetValue(new_date, duration),
//                 },
//             })
//         }
//     }

//     /**
//      * TODO: currently only works for duration, make it works for date as well
//      */
//     const onChangeInput = (e) => {
//         const new_date = addDays(toMoment(), e.target.value).format(display_format)
//         const new_duration = mode === 'duration' ? e.target.value : ''

//         setDate(new_date)
//         setDuration(new_duration)
//         setIsDatepickerVisible(true)
//         setIsPlaceholderVisible(false)

//         calendar_ref.current?.setSelectedDate(new_date)

//         if (typeof onChange === 'function') {
//             onChange({
//                 date: new_date,
//                 duration: new_duration,
//                 target: {
//                     name,
//                     value: getTargetValue(new_date, new_duration),
//                 },
//             })
//         }
//     }

//     /**
//      * TODO: handle datepicker input clear
//      */
//     // onClickClear = () => {};

//     const getTargetValue = (new_date, new_duration) => {
//         const calendar_value = getCalendarValue(new_date) && toMoment(getCalendarValue(new_date))
//         return mode === 'duration' ? new_duration : calendar_value
//     }

//     const getInputValue = () => (mode === 'duration' ? duration : date)

//     const getCalendarValue = (new_date) => {
//         if (!new_date)
//             return isMobile() ? null : toMoment(start_date || max_date).format(date_format)
//         return convertDateFormat(new_date, display_format, date_format)
//     }

//     const common_props = {
//         date_format,
//         display_format,
//         error,
//         footer,
//         has_range_selection,
//         label,
//         mode,
//         max_date,
//         min_date,
//         onChange,
//         portal_id,
//         placeholder,
//         ...other_props,
//     }

//     return (
//         <React.Fragment>
//             <MobileWrapper>
//                 <Native
//                     id={id}
//                     name={name}
//                     display_format={display_format}
//                     error={error}
//                     label={label}
//                     max_date={max_date}
//                     min_date={min_date}
//                     onBlur={onBlur}
//                     onFocus={onFocus}
//                     onSelect={onSelectCalendarNative}
//                     placeholder={placeholder}
//                     value={getCalendarValue(date)} // native picker accepts date format yyyy-mm-dd
//                     disabled={disabled}
//                     data_testid={data_testid}
//                     {...common_props}
//                 />
//             </MobileWrapper>
//             <DesktopWrapper>
//                 <div id={id} className="dc-datepicker" data-value={getInputValue()}>
//                     <div ref={datepicker_ref}>
//                         <Input
//                             {...common_props}
//                             disabled={disabled}
//                             name={name}
//                             onClick={handleVisibility}
//                             onChangeInput={onChangeInput}
//                             // onClickClear={this.onClickClear}
//                             is_placeholder_visible={is_placeholder_visible}
//                             onBlur={onBlur}
//                             required={required}
//                             type={type}
//                             value={getInputValue()}
//                             data-testid={data_testid}
//                         />
//                         <Calendar
//                             ref={calendar_ref}
//                             calendar_el_ref={calendar_el_ref}
//                             parent_ref={datepicker_ref}
//                             date_format={date_format}
//                             is_datepicker_visible={is_datepicker_visible}
//                             onHover={has_range_selection ? onHover : undefined}
//                             onSelect={onSelectCalendar}
//                             placement={placement}
//                             style={style}
//                             value={getCalendarValue(date)} // Calendar accepts date format yyyy-mm-dd
//                             {...common_props}
//                         />
//                     </div>
//                 </div>
//             </DesktopWrapper>
//         </React.Fragment>
//     )
// })

// DatePicker.displayName = 'DatePicker'

// DatePicker.defaultProps = {
//     alignment: 'bottom',
//     date_format: 'YYYY-MM-DD',
//     mode: 'date',
//     display_format: 'DD MMM YYYY',
//     keep_open: false,
// }

// DatePicker.propTypes = {
//     error_messages: PropTypes.array,
//     label: PropTypes.string,
//     is_alignment_top: PropTypes.bool,
//     date_format: PropTypes.string,
//     disabled: PropTypes.bool,
//     mode: PropTypes.string,
//     max_date: PropTypes.string,
//     min_date: PropTypes.string,
//     name: PropTypes.string,
//     onFocus: PropTypes.func,
//     portal_id: PropTypes.string,
//     placeholder: PropTypes.string,
//     required: PropTypes.string,
//     type: PropTypes.string,
//     value: PropTypes.string,
//     data_testid: PropTypes.string,
//     display_format: PropTypes.string,
//     error: PropTypes.string,
//     footer: PropTypes.node,
//     id: PropTypes.string,
//     has_range_selection: PropTypes.bool,
//     onBlur: PropTypes.func,
//     onChange: PropTypes.func,
// }

// export default DateOfBirthPicker
