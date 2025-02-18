import React from "react";

import minus from "/public/minus.png";
import plus from "/public/plus.png";
import language from "/public/language.png";
import comment from "/public/comment.png";
import Image from "next/image";
import CycleHeroSection from "@/components/shared/Navber/CycleHeroSection";
import Endpic from "/public/end.png";
import { Copy } from "lucide-react";

const Page = () => {
  return (
    <div className="">
      <section>
        <CycleHeroSection bgImage="/guide.png" />
      </section>

      <div className="mt-20 mb-20 space-y-10 w-full md:p-0 px-5 xl:max-w-[70%] mx-auto">
        <div className="bg-gradient-to-r from-cyan-100 to-orange-100 p-5 rounded-lg border space-y-5 shadow-lg ">
          <h3 className=" text-center">Bonjour,</h3>

          <h5>
            J&apos;espère que vous allez bien ! Je suis très ravi de vous
            présenter l&apos;application que j&apos;ai développée avec une
            personne qui m’est très chère. Cette application vous permet de
            générer instantanément des commentaires pour vos élèves à la fin de
            chaque trimestre, et ce,<span className="font-bold underline">à la vitesse de la lumière.</span>  Voici un guide
            rapide pour vous aider à naviguer efficacement dans
            l&apos;application.
          </h5>
        </div>

        <div className=" bg-gradient-to-r from-orange-100 to-cyan-100 p-5 rounded-lg border space-y-5  shadow-lg  ">
          <h3>Premiers Pas</h3>
          <h5>
            ⦁<span className="span"> Saisie initiale:</span> Commencez par
            entrer le nom de l&apos;élève, le sexe et la tonalité de voix
            souhaitée.
          </h5>
        </div>

        <div className="bg-gradient-to-r from-cyan-100 to-orange-100 p-5 rounded-lg border space-y-5  shadow-lg  ">
          <h3>Navigation dans l&apos;Application</h3>
          <h5>
            ⦁ <span className="span">Sections principales:</span> : Juste en
            dessous, vous trouverez trois sections principales : Domaines
            d’apprentissages, Comportements, et Améliorations. Notez que le
            contenu de ces sections varie selon les cycles 1, 2 ou 3.
          </h5>
        </div>

        <div className=" bg-gradient-to-r from-orange-100 to-cyan-100 p-5 rounded-lg border space-y-10  shadow-lg ">
          <h3>Utilisation des Fonctionnalités</h3>
          <h5>
            ⦁ <span className="span">Évaluation des Compétences :</span> Dans la
            section Domaines d’apprentissages comme le français, vous évaluerez
            diverses compétences. À côté de chaque compétence, comme la
            grammaire ou la lecture, vous trouverez des icônes
            <button className=" text-lg px-2 text-black bg-orange-200 mx-1 shadow-lg shadow-slate-600 rounded-sm">
              +
            </button>{" "}
            ,{" "}
            <button className=" text-lg px-2 text-black bg-orange-200 mx-1 shadow-lg shadow-slate-600 rounded-sm ">
              -
            </button>{" "}
            , et{" "}
            <button className=" text-lg px-2 text-black bg-orange-200 mx-1 shadow-lg shadow-slate-600 rounded-sm ">
              {" "}
              ×{" "}
            </button>
            .
          </h5>

          <h5>
            <span className="span"> Ajouter ou Soustraire des Points :</span>{" "}
            Cliquez sur licône{" "}
            <button className=" text-lg px-2 text-black bg-orange-200 mx-1 shadow-lg shadow-slate-600 rounded-sm ">
              +
            </button>{" "}
            ou{" "}
            <button className=" text-lg px-2 text-black bg-orange-200 mx-1 shadow-lg shadow-slate-600 rounded-sm ">
              -
            </button>{" "}
            Pour la section comportement il y a deux approches, par example si
            l’élève est distrait vous pouvez soit mettre un moins à attentif : {" "}
            <Image
              className="shadow-lg shadow-slate-600 rounded-sm"
              src={minus}
              alt="img"
            />{" "}
            <br /> soit mettre un plus à distrait  :{" "}
            <Image
              className="shadow-lg shadow-slate-600 rounded-sm"
              src={plus}
              alt="img"
            />
          </h5>

          <h5>
            <span className="span"> Retirer un Commentaire :</span> Si vous
            changez d&apos;avis, appuyez sur la croix{" "}
            <button className=" text-lg px-2 text-black bg-orange-200 mx-1 shadow-lg shadow-slate-600 rounded-sm ">
              {" "}
              ×{" "}
            </button>{" "}
            pour annuler votre sélection précédente.
          </h5>
        </div>

        <div className="bg-gradient-to-r from-cyan-100 to-orange-100 p-5 rounded-lg border space-y-10  shadow-lg ">
          <h3>Conseils d&apos;Utilisation</h3>

          <h5>
            <span className="span"> ⦁ Sélection Pertinente: </span>  <span className=" font-bold underline">  Il n&apos;est
            pas nécessaire de commenter toutes les compétences pour chaque
            élève. </span> Choisissez ce qui est pertinent afin de ne pas surcharger le
            commentaire. . <br />
            <sp className="span">
              {" "}
              Personnalisation pour les Langues Vivantes :
            </sp>{" "}
            Pour les langues vivantes, cela dépend du pays dans lequel vous
            enseignez. Vous devrez indiquer la langue étudiée et la
            personnaliser, par exemple en mentionnant le Portugais:{" "}
            <Image
              className="shadow-lg shadow-slate-600 rounded-sm"
              src={language}
              alt="img"
            />{" "}
            Si vous ne voyez pas votre langue, faites-le-nous savoir, nous
            pourrons l’ajouter.
          </h5>

          <h5>
            ⦁<span className="span"> Simplicité et Clarté : </span>Les domaines
            d’apprentissages, les comportements, et les améliorations ont été
            soigneusement choisis pour rester simples et concis.
          </h5>
        </div>

        <div className=" bg-gradient-to-r from-orange-100 to-cyan-100 p-5 rounded-lg border space-y-10 shadow-lg  ">
          <h3>Phase Bêta</h3>

          <h5>
            Cette version est actuellement en phase bêta. Si vous identifiez des
            éléments manquants ou des améliorations possibles, n&apos;hésitez
            pas à nous en informer via cette adresse :
          <span className=" font-bold underline"> support@teachercommentshub.com.</span> Nous sommes ouverts à faire les
            ajustements nécessaires pour satisfaire les enseignants.
          </h5>
        </div>

        <div className="bg-gradient-to-r from-cyan-100 to-orange-100 p-5 rounded-lg border space-y-10 shadow-lg  ">
          <h3>Finalisation</h3>

          <h5>
            ⦁ <span className="span">Génération du Commentaire: </span>Après
            avoir fait vos choix, cliquez sur « Générer »{" "}
            <Image src={comment} alt="img" />
            et observez la magie.
          </h5>
          <h5>
            ⦁ <span>Personnalisation :</span>Vous aurez ensuite la possibilité
            de copier le commentaire en appuyant sur l’icône suivante :
            <Copy></Copy>de faire des ajustements, et d&apos;ajouter votre
            touche personnelle si nécessaire.
          </h5>
          <h5>
            ⦁<span className="span"> Pratique:</span> Actuellement, l’accès est
            gratuit. Cependant, dans un futur proche, je compte le rendre
            disponible à un tarif très raisonnable. N’hésitez pas à en discuter
            avec vos écoles ou à envisager de l’acheter directement.
          </h5>
        </div>

        <div className=" flex justify-center">
          <Image src={Endpic} alt="img" />
        </div>

        <h3>Bonne découverte !</h3>
      </div>
    </div>
  );
};

export default Page;
