const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {


}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('movemouse', handleUpdate))
