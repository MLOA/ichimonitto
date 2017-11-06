export default class {
	static post(url, sendData) {
		return fetch(url, {
			method: 'POST',
			mode: 'cors',
			// credentials: 'include',
			body: sendData
		})
	}
	static createRoom(category, roomName) {
		console.log('create', arguments)
		const url = 'api/mkroom'
		const sendData = new FormData()
		sendData.append("cate", category)
		sendData.append("room", roomName)
		return this.post(url, sendData).then(res => {
			return res.text()
		})
	}
	static joinRoom(roomName) {
		console.log('join', arguments)
	}
	static kick(id) {
		console.log('kick', arguments)
		// const url = '../php/kickUser.php'
		// const roomUrlArr = location.href.split("/")
		// const roomName =  roomUrlArr[roomUrlArr.length -2]
		// const sendData = new FormData()
		// sendData.append("room", roomName)
		// sendData.append("id", id)
		// return this.post(url, sendData)
	}
}