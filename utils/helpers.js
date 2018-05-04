






export const objToArr = (obj) => {

	let newArr = []

	Object.keys(obj).filter(key => obj[key].title !== undefined).map(key => newArr.push(obj[key]))
	console.log(newArr)

	return newArr

}