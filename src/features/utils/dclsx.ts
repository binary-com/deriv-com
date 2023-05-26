import clsx, { ClassValue } from 'clsx'

type foo = ClassNames | Omit<ClassValue, ClassNames>

const dclsx = (...inputs: foo[]) => {
    return clsx(...inputs)
}

export default dclsx
