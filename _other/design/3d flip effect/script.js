// click event
document.querySelector('.container').addEventListener('click', function() {
    this.querySelector('.card').classList.toggle('flipped')
})

// get info
const getUser = greenlet( async username => {
	const url = `https://api.github.com/users/${username}`
	const res = await fetch(url)
	return await res.json()
})

getUser('thompsonemerson').then(
    console.log,
    console.error
)