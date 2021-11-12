import ResultsMain from "./resultmain/ResultsMain";
import ResultsSearch from "./resultssearsh/ResultsSearch";
import ResultsTitle from "./resultstitle/ResultsTitle";




function Results(){
    return(
        <section className="results">
            <ResultsTitle />
            <ResultsMain text="Sass has two syntaxes. The most commonly used syntax is known as &ldquo;SCSS&rdquo;(for&ldquo;Sassy CSS&rdquo;), and is a superset of CSS&rsquo;s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension .scss." link="Difference between .sass and .scss - Responsive Web Design" sublink="https://responsivedesign.is/articles/difference-between-sass-and-scss/"/>
            <ResultsSearch text="CSS with superpowers ... Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. Glasses. Current Releases:" link="Sass: Syntactically Awesome Style Sheets" slink="https://sass-lang.com" />
            <ResultsSearch link="Syntax - Sass" slink="https://sass-lang.com" text="The SCSS syntax uses the file extension .scss . With a few small exceptions, its a superset of CSS, witch means essentially all valid CSS is valid SCSS ..."/>
            <ResultsSearch link="Difference between .sass and .scss - Responsive Web Design" slink="https://responsivedesign.is/articles/difference-between-sass-and-scss/" text="Sass has two syntaxes. The most commonly used syntax is known as &ldquo;SCSS&rdquo;(for&ldquo;Sassy CSS&rdquo;), and is a superset of CSS&rsquo;s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension .scss."/>
            <ResultsSearch link="The Complete Guide to SCSS/SASS - freeCodeCamp" slink="https://www.freecodecamp.org/news/how-i-integrated-css-modules-with-scss-into-my-react-application" text="Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely .."/>
            <ResultsSearch link="Sass makes CSS fun! - GitHub" slink="https://github.com › sass › sass" text="Sass makes CSS fun again. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more."/>
            <ResultsSearch link="SASS - Home of Cowboy Action Shooting" slink="https://sassnet.com" text="The Single Action Shooting Society was created to preserve and promote the sport of Cowboy Action Shooting. SASS members share a common interest in ..."/>
            <ResultsSearch link="Sass Guidelines" slink="https://sass-guidelin.es" text="This is how Sass describes itself in its documentation: Sass is an extension of CSS that adds power and elegance to the basic language. Sass' ultimate objective ..."/>

        </section>
    );

}

export default Results;