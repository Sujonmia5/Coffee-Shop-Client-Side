import './Button.css'

const PrimaryButton = ({ title, style }) => {
    return (
        <button role='button' className={`btn-pri btn sm:h-[45px] font-jost ${style}`}>
            <a href="/">{title}</a>
        </button>
    );
};

export default PrimaryButton;