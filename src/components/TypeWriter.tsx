import Typewriter from 'typewriter-effect';

function TypeWriterText () {
    return (
        <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
          onInit={(typewriter) => {
            typewriter.typeString('<span>From <span class="text-1">Researcher</span> to <span class="text-1">Web Developer</span></span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span>Welcome to my <span class="text-1">journey</span></span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
          }}
        />
    );
};

export default TypeWriterText;