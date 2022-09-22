import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal';
import { useState } from "react";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

	const [type, setType] = useState('deposit');

	return (
		<Modal isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>

			<button type="button"
				onClick={onRequestClose}
				className="react-modal-close">
				<img src={closeImg} alt="fechar" />
			</button>

			<Container>
				<h2>Cadastrar transação</h2>

				<input placeholder="Título"></input>
				<input type="number" placeholder="Valor"></input>

				<TransactionTypeContainer>
					<RadioBox type="button"
						onClick={() => { setType('deposit'); }}
						isActive={type === 'deposit'}>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox type="button"
						onClick={() => { setType('withdraw'); }}
						isActive={type === 'withdraw'}>
						<img src={outcomeImg} alt="Saida" />
						<span>Saida</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input placeholder="Categoria"></input>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	)
}