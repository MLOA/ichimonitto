document.querySelector(".select-create-button").addEventListener("click", function(e) {
	document.querySelector(".create-box").style.display = "block"
	document.querySelector(".join-box").style.display = "none"
})

document.querySelector(".select-join-button").addEventListener("click", function(e) {
	document.querySelector(".join-box").style.display = "block"
	document.querySelector(".create-box").style.display = "none"
})

function create(category, roomName) {
	var url = '../php/.net/mkroom.php'
	var data = new FormData()
	data.append("cate", category)
	data.append("room", roomName)
	return fetch(url, {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		body: data
	})
}

document.querySelector(".create-button").addEventListener("click", function(e) {
	var category = document.querySelector("select").value
	var roomName = document.querySelector(".room-name").value
	create(category, roomName).then(function(response) {
		if (!response.ok) {
			console.log("create error", response)
			alert("error")
		} else {
			var res = response.json()
			window.location = "./\/" + roomName
		}
	})
})

function join(roomName) {
	console.log(roomName)
}

document.querySelector(".join-button").addEventListener("click", function(e) {
	var roomName = document.querySelector(".join-room-name").value
	join(roomName)
})