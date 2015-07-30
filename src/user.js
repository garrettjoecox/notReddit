
export class User{

	activate(params) {
		console.log(params.userId);
		this.userId = params.userId;
	}

}
