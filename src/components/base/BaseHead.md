.main{
		width: 90%;
		left: 5%;
		position: absolute;
		top: 0;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: flex-start;
		padding: 15px 50px;
		padding-bottom: 80px;
		box-shadow: 0 0 15px #cccccc;
		border-radius: 0 0 15px 200px;
		border-right: 2px solid #17c3b2;
	}

	.nav-bar{
		width: 82%;
		position: fixed;
		top: 0;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		z-index: 99;
		padding: 15px 0;	
	}
	.nav-bar .logo a{
		font-size: medium;
		color: #25182e;
	}

	.nav-bar ul{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
	.nav-bar ul li{
		padding: 0 25px;
	}
	.nav-bar ul li a{
		color: #25182e;
		font-size: medium;
		font-weight: bold;
		/*transition: .5s;*/
	}

	.nav-bar ul li a:hover{
		border-bottom: 2px solid #17c3b2;
	}

	.nav-bar ul li:first-child a{
		border-bottom: 2px solid #17c3b2;
	}

	