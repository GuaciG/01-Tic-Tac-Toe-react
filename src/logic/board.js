import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = boardToCheck => {
	//check all winner combinations to see if X or O is winner
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			//We have a winner and return winner
			return boardToCheck[a];
		}
	}
	//if not return no winner
	return null;
};

export const checkEndGame = newBoard => {
	//check if there is a draw if there is not empty squares on board
	return newBoard.every(square => square !== null);
};
