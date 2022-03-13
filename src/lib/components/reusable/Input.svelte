<script>
    export let label = "";
    export let type = "text";
    export let id = "";
    export let placeholder = "";
    export let value = "";

    const onInput = e => (value = e.target.value);

    export let autocomplete;
</script>

<div class="form-control">
    <label class="label" for={id}>
        <span class="label-text">{label}</span>
    </label>

    <input {type}
           {placeholder}
           {value}
           id={id}
           on:input={onInput}
           class="input input-bordered"
           {autocomplete}>
</div>