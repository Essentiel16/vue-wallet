<template>
	<div>
		<div class="container">
			<CustomSidebar />
			<div class="main">
				<div class="main-header">
					<CustomHeader />
				</div>
				<div class="transaction">
					<h5>Transactions</h5>
					<div class="transaction-tools">
						<div class="transaction-tools-search">
							<input type="search" id="gsearch" name="gsearch" placeholder="Search by name" />
							<span>
								<img class="search-icon" src="@/assets/icons/search.svg" svg-inline />
							</span>
						</div>
						<div class="transaction-tools-filter" id="filter" @click="toggleModal">
							Filter
							<img class="filter" src="@/assets/icons/filter.svg" svg-inline />
						</div>
					</div>
				</div>
				<div class="table">
					<CustomTable :items="items" />
				</div>
				<Pagination/>
			</div>
		</div>

		<CModal v-if="showModal" :modalTitle="'Filter'" :position="'right'" @toggleModal="toggleModal">
			<form action="" class="transfer-form" @submit.prevent="applySearch">
				<div class="input-field">
					<div class="input-field-input">
						<label for="account">Transaction Type</label><br />
						<select name="ttype" id="ttype" v-model="form.transactionType">
							<option value="transfer">Wallet Transfer</option>
							<option value="deposit">Deposit Fund</option>
						</select>
					</div>
					<div class="input-field-input2">
						<Custom-input class="date-input" :size="'large'" :type="'date'" :title="'Start Date'" :placeholder="'20-02-2021'" v-model="form.startDate" />
						<Custom-input class="date-input" :size="'large'" :type="'date'" :title="'End Date'" :placeholder="'20-02-2021'" v-model="form.endDate" />
					</div>
					<h6>Transaction Status</h6>
					<div class="wallet-input">
						<input type="radio" id="failed" name="wallet-status" value="failed" v-model="form.fail"/>
						<label for="failed">Failed</label><br />
						<input type="radio" id="successful" name="wallet-status" value="Successful" v-model="form.transactionStatus"/>
						<label for="successful">Successful</label><br />
					</div>
					<div class="input-button">
						<CustomButton><template v-if="!loading">Apply Search</template><Loader v-else/></CustomButton>
					</div>
				</div>
			</form>
		</CModal>
	</div>
</template>

<script src="./TransactionDashboard.js"></script>
<style lang="scss">
@import '../../assets/scss/layouts/_main.scss';
@import 'src/assets/scss/modules/_transactions.scss';
@import '../../assets/scss/modules/transaction-tables.scss';
</style>
