<script>

	export let employeeId = "";
	/** @type {import("./employee").Employee}  */	
	let employee;

	/**
	 * 
	 * @param {string} id
	 */
	function loadEmployee(id){
		const empJSON = window.localStorage.getItem("employees");
		if(!empJSON){ return }
		const employees = JSON.parse(empJSON);
		employee = employees.find(emp => emp.id === id);
	}

	$: loadEmployee(employeeId);

</script>

<main>
	<h1>Employee</h1>
	{#if employee}
		<div>
			<h4>{employee.name}</h4>
			<p>{employee.isAdmin ? "Admin" : "Employee"}</p>
		</div>
	{/if}
</main>