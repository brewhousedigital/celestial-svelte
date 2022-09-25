<script>
    export let label = "";
    export let type = "text";
    export let id = "";
    export let placeholder = "";
    export let value = "";
    export let boxClasses = "";

    const onInput = e => (value = e.target.value);

    export let autocomplete;
</script>

<div class={boxClasses}>
    <label class="form-label" for={id}>
        <span class="">{label}</span>
    </label>

    <input {type}
           {placeholder}
           {value}
           id={id}
           on:input={onInput}
           class="form-control"
           {autocomplete}>
</div>