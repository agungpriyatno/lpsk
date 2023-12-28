import { isArray } from "util"

export const FormDataToObject = (formdata: FormData) => {
    const entries = formdata.entries()

    formdata.forEach((value, key) => {

    })
}

export const objectToFormdata = (object: { [key: string]: FormDataEntryValue | FormDataEntryValue[] | undefined | null | null[] }) => {
    const formData = new FormData()
    const keys = Object.keys(object)
    keys.forEach((key) => {
        const value = object[key]
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((item) => {
                    if (item) {
                        formData.append(key, item)
                    }
                })
            } else {
                formData.append(key, value)
            }
        }
    })

    return formData
}