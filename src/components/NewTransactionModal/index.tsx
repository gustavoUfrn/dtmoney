import { Container } from "./styles";
import closeImg from '../../assets/close.svg';
import Modal from 'react-modal';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	return (
		<Modal isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
			>

		<button type="button" 
			onClick={onRequestClose} 
			className="react-modal-close">
				<img src={closeImg} />
		</button>

			<Container>
				<h2>Cadastrar transação</h2>

				<input placeholder="Título"></input>
				<input type="number" placeholder="Valor"></input>
				<input placeholder="Categoria"></input>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	)
}