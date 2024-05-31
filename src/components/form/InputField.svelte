<script>
	export let value, label, type = 'text';
	
	function typeAction(node){
		node.type = type;
	}
</script>

    <div class="mb-6">
        <label class="block font-medium text-sm" for="name">{label}:</label>
        <input use:typeAction  class="block bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700 px-4 py-3 rounded-lg text-md w-full" id="name" name="name" type="text" autocomplete="on" placeholder="" bind:value={value}></div>
    <style>

</style>