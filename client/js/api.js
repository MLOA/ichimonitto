export default class {
	static createRoom(category, roomName) {
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
	static joinRoom(roomName) {
		console.log("joinRoom roomName: " + roomName)
	}
}