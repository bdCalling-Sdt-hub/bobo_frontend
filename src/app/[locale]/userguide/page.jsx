import React from "react";

import minus from "/public/minus.png";
import plus from "/public/plus.png";
import language from "/public/language.png";
import comment from "/public/comment.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-40 mb-20 space-y-5 w-full md:p-0 px-5 xl:max-w-[50%] mx-auto">
      <h3>Bonjour tout le monde,</h3>

      <h5>
        J&apos;espère que vous allez bien ! Je suis très heureux de vous
        présenter l&apos;application que j&apos;ai développée avec ma mère.
        Cette application vous permet de générer instantanément des commentaires
        pour vos élèves à la fin de chaque trimestre, et ce, à la vitesse de la
        lumière. Voici un guide rapide pour vous aider à naviguer efficacement
        dans l&apos;application.
      </h5>

      <h3>Premiers Pas</h3>
      <h5>
        ⦁<span className="span"> Saisie initiale:</span> Commencez par entrer le
        nom de l&apos;élève, la tonalité de voix souhaitée, et le sexe.
      </h5>

      <h3>Navigation dans l&apos;Application</h3>
      <h5>
        ⦁ <span className="span">Sections principales:</span> Juste en dessous,
        vous trouverez trois sections principales : Domaines d’apprentissages,
        Comportements, et Améliorations. Notez que le contenu de ces sections
        varie selon les cycles 1, 2 ou 3.
      </h5>
      <h3>Utilisation des Fonctionnalités</h3>
      <h5>
        ⦁ <span className="span">Évaluation des Compétences :</span> Dans la
        section Domaines d’apprentissages comme le français, vous évaluerez
        diverses compétences. À côté de chaque compétence, comme la grammaire ou
        la lecture, vous trouverez des icônes
        <button className=" text-lg px-2 text-black bg-orange-200 mx-1">
          +
        </button>{" "}
        ,{" "}
        <button className=" text-lg px-2 text-black bg-orange-200 mx-1">
          -
        </button>{" "}
        , et{" "}
        <button className=" text-lg px-2 text-black bg-orange-200 mx-1">
          {" "}
          ×{" "}
        </button>
        .
      </h5>

      <h5>
        <span className="span"> Ajouter ou Soustraire des Points :</span>{" "}
        Cliquez sur licône{" "}
        <button className=" text-lg px-2 text-black bg-orange-200 mx-1">
          +
        </button>{" "}
        ou{" "}
        <button className=" text-lg px-2 text-black bg-orange-200 mx-1">
          -
        </button>{" "}
        pour générer une phrase qui reflète les qualités ou les difficultés de
        l&apos;élève dans cette compétence. Pour la section comportement il y
        deux approches si par example l’élève est distrait vous pouvez soit
        mettre un moins a attentif : <Image src={minus} alt="img" /> ou un plus
        à distrait : <Image src={plus} alt="img" />
      </h5>

      <h5>
        <span className="span"> Retirer un Commentaire :</span> Si vous changez
        d&apos;avis, appuyez sur la croix{" "}
        <button className=" text-lg px-2 text-black bg-orange-200 mx-1">
          {" "}
          ×{" "}
        </button>{" "}
        pour annuler votre sélection précédente.
      </h5>

      <h3>Conseils d&apos;Usage</h3>

      <h5>
        <span className="span"> ⦁ Sélection Pertinente: </span>Il n&apos;est pas
        nécessaire de commenter toutes les compétences pour chaque élève.
        Choisissez ce qui est pertinent afin de ne pas surcharger le
        commentaire. <br />
        <span className="span">
          {" "}
          Personnalisation pour les Langues Vivantes:
        </span>{" "}
        Pour les langues Vivante comme cela va dépendre du pays dans lequel vous
        enseignez ce sera à vous de personnaliser par example mettre portugais{" "}
        <Image src={language} alt="img" />
      </h5>

      <h5>
        ⦁<span className="span"> Simplicité et Clarté : </span>Les domaines
        d’apprentissage, comportements, et améliorations ont été soigneusement
        choisis pour rester simples et concis.
      </h5>

      <h3>Phase Bêta</h3>

      <h5>
        Cette version est actuellement en bêta. Si vous identifiez des éléments
        manquants ou des améliorations possibles, n&apos;hésitez pas à nous en
        informer via cette address <a href="">teachercommenthub@gmail.com.</a>{" "}
        Nous sommes ouverts à faire les ajustements nécessaires pour bénéficier
        à toute notre communauté.
      </h5>

      <h3>Finalisation</h3>

      <h5>
        ⦁ <span className="span"> Génération du Commentaire: </span>Après avoir
        fait vos choix, cliquez sur « Générer » et observez la magie.{" "}
        <Image src={comment} alt="img" />
      </h5>
      <h5>
        ⦁ <span>Personnalisation :</span> Vous aurez ensuite la possibilité de
        copier le commentaire , de faire des ajustements, et d&apos;ajouter
        votre touche personnelle si nécessaire.
      </h5>
      <h5>
        ⦁<span className="span"> Pratique:</span> Profitez de 12 commentaires
        gratuits pour vous familiariser avec l&apos;application.
      </h5>

      <h3>Amusez-vous bien et bonne découverte !</h3>
    </div>
  );
};

export default Page;
