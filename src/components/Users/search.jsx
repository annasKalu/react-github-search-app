import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/Alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        // setting an alert message should the user submit an empty input
        if (text === '') {
            alertContext.setAlert('Please, enter a valid search', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('');

            console.log(text);
        }
    };


    const onChange = (event) => {
        setText(event.target.value)
    }



    // const { showClear, clearUsers } = this.props;
    return (
        <div>
            <form className="form"
                onSubmit={onSubmit}>
                <input type='text'
                    name='text'
                    placeholder='Search Users...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className='btn btn-dark btn-block'
                />
            </form>

            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}>
                    Clear
                </button>
            )}

        </div>
    );

};



export default Search;
