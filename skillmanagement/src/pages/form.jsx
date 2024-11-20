

function Form(){


    return (
        <>
            <form method="POST">
                <input type="text" placeholder="first name" name="first_name"/>
                <input type="text" placeholder="last name" name="last_name"/>
                <input type="email" placeholder="johndoe@gmail.com" name="email"/>
                <input type="address" placeholder=" "  name="address"/>

                <select>
                    <option>Design</option>
                    <option>Writing</option>
                    <option>Public speaking</option>
                    <option>Collaboration</option>
                    <option></option>
                    <option></option>
                </select>
            </form>
        </>
    )
}

export default Form