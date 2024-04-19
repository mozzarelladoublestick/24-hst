<template>
  <div
    v-editable="blok"
    class="relative map"
    :class="{ 'overflow-hidden': showMenu }"
  >
    <Navigation></Navigation>
    <img
      v-show="!showMenu"
      @click="openMenu"
      src="../icons/menu.svg"
      class="absolute z-50 md:hidden right-4 w-8 top-6"
    />
    <img
      v-show="showMenu"
      @click="openMenu"
      src="../icons/close.svg"
      class="absolute z-50 md:hidden right-4 w-8 top-6"
    />
    <div
      v-if="showMenu"
      class="bg-orange absolute text-2xl h-full w-screen z-40 overflow-hidden p-12"
    >
      <h4 @click="goTo('#events')" class="my-4">EVENTS</h4>
      <h4 @click="goTo('#speaker')" class="my-4">REDNER</h4>
      <h4 @click="goTo('#aboutus')" class="my-4">WER WIR SIND</h4>
      <div class="text-sm mt-60">
        <h5 class="font-bold">Impressum</h5>
        <h5>ÖSM - Christen an der Uni</h5>
        <h5>Leitenweg 7</h5>
        <h5>5113 St. Georgen</h5>
        <h5>ZVR-Zahl: 286541861</h5>
        <h5><a href="mailto:web@oesm.at">web@oesm.at</a></h5>
        <a class="underline" href="https://www.oesm.at"><h5>www.oesm.at</h5></a>
      </div>
      <h3 class="text-xs mt-12">&copy; All Rights Reserved 2024</h3>
      <p class="text-xs mt-6">
        Medieninhaber Für den Inhalt und Design verantwortlich: Verein:
        Österreichische Studentenmission – Christen an der Uni (ÖSM) ZVR-Zahl:
        286541861 Inhalt Diese Website dient der Darstellung und Bewerbung der
        Hochschultage – einer nicht-kommerziellen Veranstaltung von und für
        Studenten. Darüber hinaus werden Gedankenanstöße zu weltanschaulichen
        Themen, insbesondere mit christlichem Bezug dargestellt.
        Haftungsausschluss Der Medieninhaber übernimmt keinerlei Gewähr für die
        Aktualität, Korrektheit, oder Vollständigkeit der bereitgestellten
        Informationen. Datenschutzerklärung Der Schutz Ihrer persönlichen Daten
        ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
        ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG
        2003). In diesen Datenschutzinformationen informieren wir Sie über die
        wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
        Kontakt mit uns Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden
        Ihre angegebenen Daten zwecks Bearbeitung der Anfrage gespeichert und
        verarbeitet, d.h. insbesondere an etwaige Ansprechpartner
        weitergeleitet. Darüber hinaus werden die Daten nicht ohne Ihre
        Einwilligung verwendet. Gesammelte Daten Wir verzichten bewusst auf
        Trackingmethoden via Cookies oder Ähnliches, welche Sie als Benutzer
        dieser Website identifizieren. Nutzung von Youtube Aufgrund unseres
        berechtigten Interesses an der Optimierung und dem Betrieb unseres
        Online-Angebotes (im Sinne des Art. 6 Abs. 1 lit. f. DSGVO), bindet
        diese Website Youtube Videos ein. Youtube wird von Google Inc. (1600
        Amphitheatre Parkway, Mountain View, California, U.S.) betrieben.
        Erkennbar sind die Einbindungen an dem roten Youtube Logo. Die
        Datenschutzerklärung von Youtube finden Sie hier:
        https://policies.google.com/privacy Im Folgenden wird Youtube als
        Drittanbieter bezeichnet. Inhalte von Drittanbietern werden über eine
        direkte Verbindung zwischen Ihrem Browser und den Drittanbieter-Servern
        geladen. Der Websitebetreiber hat keinerlei Einfluss auf die Natur und
        den Umfang der Daten, welche an die Drittanbieter-Server übermittelt
        werden. Insbesondere werden Drittanbieter darüber informiert, dass Sie
        als Nutzer diese Website besucht haben. Es besteht hierbei die
        Möglichkeit, dass Ihre IP-Adresse vom Drittanbieter gespeichert wird.
        Sind Sie während des Besuchs auf dieser Website in Ihrem
        Drittanbieter-Konto eingeloggt, werden die genannten Informationen
        möglicherweise mit diesem verknüpft. Nutzen Sie die Zusatzfunktionen des
        Drittanbieters – etwa indem Sie einen Beitrag teilen, liken oder upvoten
        –, werden die entsprechenden Informationen ebenfalls an den
        entsprechenden Drittanbieter übermittelt. Möchten Sie verhindern, dass
        Drittanbieter diese Daten mit Ihrem Drittanbieter-Konto verknüpft,
        loggen Sie sich bitte vor dem Besuch dieser Website beim Drittanbieter
        aus und löschen Sie die gespeicherten Cookies. Über Ihr Nutzerprofil
        beim Drittanbieter können Sie weitere Einstellungen zur
        Datenverarbeitung für Werbezwecke tätigen oder der Nutzung Ihrer Daten
        für Werbezwecke widersprechen. Ihre Rechte Ihnen stehen bezüglich Ihrer
        bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft,
        Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf
        und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
        gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
        Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei
        uns oder der Datenschutzbehörde beschweren. Sie erreichen uns unter den
        im Impressum angeführten Kontaktmöglichkeiten.
      </p>
    </div>

    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <Footer></Footer>
  </div>
</template>

<script setup>
useHead({
  title: "Lost & Found by ÖSM",
  meta: [
    {
      name: "description",
      content:
        "Das Lost & Found Event der ÖSM ist ein Projekt, das an verschiedenen Hochschulen, Universitäten und Fachhochschulen im April und Mai 2024 stattfindet. Dabei werden die Themen Zukunft, Erfolg und Identität aus einer christlichen Perspektive beleuchtet.",
    },
  ],
});

defineProps({ blok: Object });
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
const showMenu = ref(false);
onMounted(() => {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.to("#compass", {
    motionPath: {
      path: "#path",
    },
    // transformOrigin: "50% 50%",
    duration: 100,
    // ease: "power1.inOut",
  });
});
function openMenu() {
  showMenu.value = !showMenu.value;
}

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
function goTo(section) {
  showMenu.value = false;
  gsap.to(window, { duration: 1, scrollTo: section });
}
</script>
