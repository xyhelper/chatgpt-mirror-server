<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
		<f-k-arkos
			:public-key="publicKey"
			mode="lightbox"
			arkosUrl="https://tcr9i.xyhelper.cn"
			@onCompleted="onCompleted($event)"
			@onError="onError($event)"
		/>
	</cl-crud>
</template>

<script lang="ts" name="chatgpt-session" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{
			label: "邮箱",
			prop: "email",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "密码",
			prop: "password",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "用户ID",
			prop: "userID",
			required: true,
			component: { name: "el-input-number" }
		},
		{
			label: "状态",
			prop: "status",
			component: {
				name: "el-switch",
				props: {
					activeValue: 1,
					inactiveValue: 0
				}
			}
		},
		{
			label: "PLUS",
			prop: "isPlus",
			component: {
				name: "el-switch",
				props: {
					activeValue: 1,
					inactiveValue: 0
				}
			}
		},
		{
			label: "session",
			prop: "officialSession",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "备注",
			prop: "remark",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		}
	],
	onOpened(data) {
		// 自动生成uuid 作为userToken
		if (!data.userID) {
			data.userID = 0;
		}
		localStorage.removeItem("arkoseToken");
		window.myEnforcement.run();
	},
	onSubmit(data, { done, close, next }) {
		// 自动生成uuid 作为userToken
		let arkoseToken = localStorage.getItem("arkoseToken");
		if (arkoseToken) {
			next({ ...data, arkoseToken });
			done();
			close();
		} else {
			alert("请刷新页面，重新验证");
			done();
		}
	}
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "id", prop: "id" },
		{ label: "创建时间", prop: "createTime", sortable: true },
		{ label: "更新时间", prop: "updateTime", sortable: true },
		{ label: "邮箱", prop: "email", sortable: true },
		{ label: "密码", prop: "password", sortable: true },
		{ label: "用户ID", prop: "userID", sortable: true },
		{
			label: "状态",
			prop: "status",
			component: { name: "cl-switch" },
			sortable: true
		},
		{
			label: "PLUS",
			prop: "isPlus",
			component: { name: "cl-switch" },
			sortable: true
		},
		{
			label: "session",
			prop: "officialSession",
			showOverflowTooltip: true,
			sortable: true
		},
		{
			label: "备注",
			prop: "remark",
			showOverflowTooltip: true,
			sortable: true
		},
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.chatgpt.session
	},
	(app) => {
		app.refresh();
	}
);
</script>
<script lang="ts">
import FKArkos from "./FKArkos.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		FKArkos
	},
	data() {
		return {
			// publicKey: process.env.VUE_APP_ARKOSE_PUBLIC_KEY,
			publicKey: "0A1D34FC-659D-4E23-B17B-694DCFCF6A6C",
			arkoseToken: ""
		};
	},
	methods: {
		onCompleted(token: string) {
			console.log("onCompleted---------->", token);
			localStorage.setItem("arkoseToken", token);

			this.arkoseToken = token;
			// router.replace({ path: "/dashboard" });
		},
		onError(errorMessage: any) {
			alert(errorMessage);
		},

		onSubmit() {
			if (!this.arkoseToken) {
				window.myEnforcement.run();
			}
		}
	}
});
</script>
