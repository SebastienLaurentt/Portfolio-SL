import Typewriter from 'typewriter-effect';

function TypeWriterText () {
    return (
        <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
          onInit={(typewriter) => {
            typewriter.typeString('<span class="text-2xl"">From Researcher to Web Developer</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span <span class="text-2xl""> Welcome to my journey</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
          }}
        />
    );
};

export default TypeWriterText;