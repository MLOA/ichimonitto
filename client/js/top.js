import api from './modules/api'

console.log("top.js")

document.querySelector(".select-create-button").addEventListener("click", e => {
	document.querySelector(".create-box").style.display = "block"
	document.querySelector(".join-box").style.display = "none"
})

document.querySelector(".select-join-button").addEventListener("click", e => {
	document.querySelector(".join-box").style.display = "block"
	document.querySelector(".create-box").style.display = "none"
})

document.querySelector(".create-button").addEventListener("click", e => {
	var category = document.querySelector("select").value
	var roomName = document.querySelector(".room-name").value
	api.createRoom(category, roomName).then(res => {
		if (!res.ok) {
			console.log("create error", res)
			alert("error")
		} else {
			var res = res.json()
			window.location = "./\/" + roomName
		}
	})
})

document.querySelector(".join-button").addEventListener("click", e => {
	var roomName = document.querySelector(".join-room-name").value
	api.joinRoom(roomName)
})