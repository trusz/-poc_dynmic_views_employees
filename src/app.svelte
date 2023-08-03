<script>
    import EmployeeList from "./lib/employee-list.svelte";
    import Employee from "./lib/employee.svelte";
    import { appBase$, viewBase$ } from "./lib/route-store"
    
    /** @type {string} */
    export let appBase = ""
    /** @type {string} */
    export let viewBase = ""
    /** @type {string[]} */
    export let routeChunks = [] 
    
    
    $:console.log({level:"dev", message:"app", appBase, viewBase, routeChunks, })

    $: appBase$.set(appBase)
    $: viewBase$.set(viewBase)

    $: employeeId = routeChunks[0]
    
</script>

<main>
    {#if employeeId}
        <Employee employeeId={employeeId} />
    {:else}
        <EmployeeList />
    {/if}
</main>

<style>
    
</style>
