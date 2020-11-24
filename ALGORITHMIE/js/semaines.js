let nbJours = 16;
let nbSemaines = 0;

while (nbJours >= 7) {
    nbSemaines++;
    nbJours -= 7;
}

if (nbSemaines <= 1 && nbJours <= 1) {
    console.log(`${nbSemaines} semaine et ${nbJours} jour`);
} else if (nbSemaines <= 1) {
    console.log(`${nbSemaines} semaine et ${nbJours} jours`);
} else if (nbJours <= 1) {
    console.log(`${nbSemaines} semaines et ${nbJours} jour`);
} else {
    console.log(`${nbSemaines} semaines et ${nbJours} jours`);
}
