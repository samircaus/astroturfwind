<script>
	import InputField from './InputField.svelte';
	export let active_step;
	let formData = {
		name: '',
		surname: '',
		email: '',
		password: '',
		address: '',
		city: '',
		country: '',
		postcode: '',
		account_name: '',
		card_no: ''
	}
	
	const handleSubmit = () => {
		console.log("Your form data => ",formData)
	}

</script>

<form class="form-container" on:submit={handleSubmit}>
	{#if active_step == 'Info'}
		<InputField label={'Name'} bind:value={formData.name}/>
		<InputField label={'Surname'} bind:value={formData.surname}/>
		<InputField label={'Email'} bind:value={formData.email}/>
		<InputField type={'password'} label={'Password'} bind:value={formData.password}/>
	{:else if active_step == 'Address'}
		<InputField label={'Address'} bind:value={formData.address}/>
		<InputField label={'City'} bind:value={formData.city}/>
		<InputField label={'Country'} bind:value={formData.country}/>
		<InputField label={'Postcode'} bind:value={formData.postcode}/>
	{:else if active_step == 'Payment'}
		<InputField label={'Account Name'} bind:value={formData.account_name}/>
		<InputField label={'Card No'} bind:value={formData.card_no}/>
	{:else if active_step == 'Confirmation'}
		<div class="message">
			<h2>Thank you for choosing us</h2>
			<button class="btn submit">Finish </button>
		</div>
	{/if}
</form>

<style>
	
	.submit{
		background:linear-gradient(to bottom, #44c767 5%, #50b01c 100%);
		background-color:#44c767;
	}
	.submit:hover {
		background:linear-gradient(to bottom, #50b01c 5%, #44c767 100%);
		background-color:#50b01c;
	}
</style>