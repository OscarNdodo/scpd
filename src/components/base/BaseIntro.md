
.content{
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-top: 80px;
	}

	.content .titulo h1{
		display: flex;
		flex-direction: column;
		color: #111;
		font-size: 26px;
		letter-spacing: 4px;
		align-items: flex-start;
		justify-content: center;
		text-transform: uppercase;
		padding-left: 10px;
		border-left: 4px solid #17c3b2;
	}

	.content .descricao{
		position: relative;
		margin-left: 120px;
		padding: 5px 25px;
	}

	.content .descricao p{
		font-size: large;
		line-height: 27px;
		color: #222;
		padding-bottom: 30px;
	}

	.content .descricao .btn{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	button{
		background-color: transparent;
	}
	.content .descricao .btn button a{
		background-color: #17c3b2;
		color: white;
		font-size: medium;
		padding: 12px 45px;
		border-radius: 3px;
		border: 1px solid #17c3b2;
		transition: .5s;
	}

	.content .descricao .btn button a:hover{
		transform: translate(1.2);
		box-shadow: 0 0 10px #17c3b2;
	}

	.content .descricao .btn button:last-child{
		margin-left: 50px;
	}

	.content .descricao .btn button:last-child a{
		background-color: transparent;
		color: #17c3b2;
	}