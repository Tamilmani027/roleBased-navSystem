const Users={
	A:{
 			"modules": [
 									{
 										"name": "Orders",
 										"permission": ["VIEW", "CREATE"]
 									},
 			{
 				"name": "Billing",
 				"permission": ["VIEW"]
 			}
 			]
				},

B:{	
  "modules": [
    { "name": "Orders", 
			"permission": ["VIEW"] }
  ]
}
}

export default Users;