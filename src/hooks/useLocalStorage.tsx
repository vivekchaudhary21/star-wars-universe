import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: [] = []) => {
  const [value, setValue] = useState(() => {
    const people = window.localStorage.getItem(key)
    if (people) {
      return JSON.parse(people)
    }

    return initialValue
  })

  const setLSValue = (id: string) => {
    const people = window.localStorage.getItem(key)

    if (!people) {
      window.localStorage.setItem(key, JSON.stringify([id]))
      setValue([id])
    } else {
      // check if people is already there
      const exist = value.find((rec: string) => rec === id)
      if (exist) {
        const newValue = value.filter((rec: string) => rec !== id)
        setValue(newValue)
        window.localStorage.setItem(key, JSON.stringify(newValue))
      } else {
        const newValue = value.concat(id)
        setValue(newValue)
        window.localStorage.setItem(key, JSON.stringify(newValue))
      }
    }
  }

  return {
    lsValue: value,
    setLSValue,
  }
}
