<script>
	import Form from './Form.svelte';
	import ProgressBar from './ProgressBar.svelte';
	let steps = ['Info', 'Address', 'Payment', 'Confirmation'], currentActive = 1, progressBar;
	
	const handleProgress = (stepIncrement) => {
		progressBar.handleProgress(stepIncrement)
	}
	
</script>

<main>
	<div class="container">
		<ProgressBar {steps} bind:currentActive bind:this={progressBar}/>
		
		<Form active_step={steps[currentActive-1]}/>

		<div class="step-button">
			<button class="btn" on:click={() => handleProgress(-1)} disabled={currentActive == 1}>Prev</button>
			<button class="btn btn-primary" on:click={() => handleProgress(+1)} disabled={currentActive == steps.length}>Next</button>
		</div>		
	</div>	  
</main>

<style>

	.step-button{
		margin-top: 1rem;
		text-align: center;
	}
</style>