<script lang='ts'>
    import type {InputFieldData} from '../../models/InputField';
    export let form: InputFieldData
    export let readonlyToggle = true;
</script>

{#if form}
<div class="input-container">
    {#if form.id}
        <label for={form.id}>{form.label}</label>
    {/if }
<input 
    id={form.id} 
    on:click={(e) => {form.func(e, form.args)}} 
    name={form.name} 
    value={form.value}
    class={form.styles}
    placeholder={form.placeholder}
    type={form.type}
    readonly={readonlyToggle}
>
</div>

{:else}
    {console.error("No form data supplied.")}
{/if}


<style>
.input-container {
    display: flex;
    flex-direction: column;
    width: 30%;
}


</style>