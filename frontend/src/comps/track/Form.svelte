<script lang='ts'>
    import {Form} from '../../models/Form';
    import InputField from '../track/InputField.svelte';
    import {InputFieldData, InputFieldType as ifType} from '../../models/InputField';

    let sample = {
        title: 'Management',
        fields: [
            new InputFieldData(ifType.TEXT, 'name', 'Name'),
            new InputFieldData(ifType.TEXT, 'age', 'Age'),
            new InputFieldData(ifType.TEXT, 'weight', 'Weight'),
        ],
        subforms: [],
    }

    let readonlyState = true;
    const toggleReadonly = () => {
        readonlyState = !readonlyState
    }
    

    export let data: any = {
        fields: [],
    }

    // State testing -> Remove me!
    setTimeout(() => {
        data = sample;
    }, 1000)

</script>

<form>

    <div class="Box-header">
        <h2 class="Box-title form-header">
        {#if data.title}
            <div>{data?.title}</div><button class='btn' on:click={() => toggleReadonly()} >Edit</button>
        {:else}
            <span>Loading</span><span class="AnimatedEllipsis"></span>
        {/if}
        </h2>
    </div>
    
    <div class="Box-footer">
      {#each data?.fields as input, i}
            <InputField form={input} readonlyToggle={readonlyState} />
      {:else}
          <span>Loading</span><span class="AnimatedEllipsis"></span>
      {/each}
    </div>
</form>

<style>
.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>