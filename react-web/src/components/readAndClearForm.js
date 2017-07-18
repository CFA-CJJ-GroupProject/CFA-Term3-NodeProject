function readAndClearForm(form) {
    const elements = form
    let values = {}
    // Loop through form elements https://stackoverflow.com/a/19978872
    // eslint-disable-next-line
    for (let i = 0, element; element = elements[i++];) {
        // Read value from <input>
        values[element.name] = element.value
    }

    form.reset()

    return values
}

export default readAndClearForm
