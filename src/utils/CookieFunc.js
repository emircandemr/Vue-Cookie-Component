
export const setCookie = (name , value , exp) => {
	let date = new Date();
	date.setTime(date.getTime() + exp*60*1000);
	let expires = "expires="+date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export const getCookie = (name) => {
	let value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
	return "";

}
