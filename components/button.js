const Button = ({ text }) => (
	<button className="btn">
		{text}
		<style jsx>{`
			.btn {
				background-color: var(--main-color);
			}
		`}</style>
	</button>
)

export default Button
