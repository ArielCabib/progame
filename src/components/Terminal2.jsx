import Terminal from 'react-bash';
import '../css/Terminal2.css';

function Terminal2({store}) {
    return (
        <div style={{display: 'inline-block', height: '100vh', width: '100%'}}>
            <Terminal prefix="" theme={Terminal.Themes.DARK} />
        </div>
    );
}

export default Terminal2;