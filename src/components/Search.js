import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";


export const Search = () => {
    const [ value, setValue ] = useState('')
    const alert = useContext(AlertContext)
    const gitHub = useContext(GithubContext)


    const onSubmit = (e) => {
        if (e.key !== 'Enter') return

        gitHub.clearUsers()

        if (value.trim()) {
            alert.hide()
            gitHub.search(value.trim())
        } else {
            alert.show('Введите данные пользователя', 'danger')
        }
    }

    return (
        <div className="form-group">
            <input onChange={e => setValue(e.target.value)}
                   placeholder="введите ник пользователя..."
                   className="form-control"
                   onKeyPress={onSubmit}
                   value={value}
                   type="text"
            />
        </div>
    )
}