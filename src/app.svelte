<script>
    import { Toggle } from "carbon-components-svelte";
    
    /**
     * @typedef {Object} Employee
     * @property {string} name
     * @property {boolean=} isAdmin
     */

    /** @type {Employee[]} */
    let employees = []

    function init(){
        const empJSON = window.localStorage.getItem("employees");
        if(!empJSON){ return }
        employees = JSON.parse(empJSON);

        console.log({level:"dev", message:"employees", employees})
    }

    /**
     * 
     * @param {Employee[]} employees
     */
    function updateEmployees(employees){
        window.localStorage.setItem("employees", JSON.stringify(employees));
    }
    $: updateEmployees(employees)
    
    init();
</script>

<main>
    <h1>Employees</h1>
    
    <ul>
        {#each employees as employee}
            <li>
                <div>
                    <h4>{employee.name}</h4>
                    <p>{employee.isAdmin ? "Admin" : "Employee"}</p>
                </div>
                <Toggle labelText="Is Admin" bind:toggled={employee.isAdmin} />
            </li>
        {/each}
    </ul>
    
</main>

<style>

    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 0;
        margin: 0;
    }

    li{
        display: flex;
        width: 15rem;
        height: 12rem;
        padding: 1rem;
        background-color: #393939;
        outline: 2px solid rgba(0,0,0,0);
        outline-offset: -2px;
        gap:2rem;
        flex-direction: column;
    }
    
</style>
