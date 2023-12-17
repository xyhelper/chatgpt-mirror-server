<template>
	<div v-if="mode === 'inline'" :id="selector?.slice(1)" />
</template>

<script lang="ts">
import {
	defineComponent,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted
} from "vue";
declare global {
	interface Window {
		myEnforcement: any;
		setupEnforcement: any;
	}
}
export default defineComponent({
	props: {
		publicKey: {
			type: String,
			default: ""
		},
		mode: {
			type: String,
			default: ""
		},
		selector: {
			type: String,
			default: null // Any valid DOM selector is allowed here
		},
		nonce: {
			type: String,
			default: ""
		},
		arkosUrl: {
			type: String,
			default: "https://client-api.arkoselabs.com"
		}
	},
	data() {
		return {
			scriptId: ""
		};
	},

	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {
		this.scriptId = `arkose-script-${this.publicKey}`;
		const scriptElement = this.loadScript(this.publicKey, this.nonce);
		// This will inject required html and css after the Arkose script is properly loaded
		scriptElement.onload = () => {
			console.log("Arkose API Script loaded");
			window.setupEnforcement = this.setupEnforcement.bind(this);
		};
		// If there is an error loading the Arkose script this callback will be called
		scriptElement.onerror = () => {
			console.log("Could not load the Arkose API Script!");
		};
	},
	beforeUpdate() {},
	updated() {},
	beforeUnmount() {},
	unmounted() {
		if (window.myEnforcement) {
			delete window.myEnforcement;
		}
		if (window.setupEnforcement) {
			delete window.setupEnforcement;
		}
		this.removeScript();
	},
	methods: {
		removeScript() {
			const currentScript = document.getElementById(this.scriptId);
			if (currentScript) {
				currentScript.remove();
			}
		},
		// Append the JS tag to the Document Body.
		loadScript(publicKey: string, nonce: any) {
			this.removeScript();
			const script = document.createElement("script");
			script.id = this.scriptId;
			script.type = "text/javascript";
			script.src = `${this.arkosUrl}/v2/${publicKey}/api.js`;
			script.setAttribute("data-callback", "setupEnforcement");
			script.async = true;
			script.defer = true;
			if (nonce) {
				script.setAttribute("data-nonce", nonce);
			}
			document.body.appendChild(script);
			return script;
		},
		setupEnforcement(myEnforcement: any) {
			window.myEnforcement = myEnforcement;
			window.myEnforcement.setConfig({
				selector: this.selector,
				mode: this.mode,
				onReady: () => {
					this.$emit("onReady");
				},
				onShown: () => {
					this.$emit("onShown");
				},
				onShow: () => {
					this.$emit("onShow");
				},
				onSuppress: () => {
					this.$emit("onSuppress");
				},
				onCompleted: (response: any) => {
					this.$emit("onCompleted", response.token);
				},
				onReset: () => {
					this.$emit("onReset");
				},
				onHide: () => {
					this.$emit("onHide");
				},
				onError: (response: any) => {
					this.$emit("onError", response);
				},
				onFailed: (response: any) => {
					this.$emit("onFailed", response);
				}
			});
		}
	},
	watchEffect() {
		console.log("watchEffect: Watching for changes in reactive data.");
	}
});
</script>
