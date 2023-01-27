<script lang="ts" setup>
import UiLinkFooter from '@/components/ui/UiLinkFooter.vue'
import UiModal from '@/components/ui/UiModal.vue'
import { ref } from 'vue'

const props = defineProps({
  textColor: {
    type: String,
    required: false,
    default: 'neutral-500',
  },
})

const modalVisible = ref<Boolean>(false)

function showModal() {
  console.log('show modal')
  modalVisible.value = true
}
</script>

<template>
  <div class="flex gap-3 justify-center font-dm-sans">
    <UiLinkFooter role="button" @click="showModal" :textColor="props.textColor"
      >Mentions légales</UiLinkFooter
    >
    <UiLinkFooter
      :url="'https://fabriquecitoyenne.fr/privacy'"
      :textColor="props.textColor"
      >Politique de protection des données personnelles</UiLinkFooter
    >
  </div>
  <UiModal
    class="z-20 absolute"
    v-show="modalVisible"
    @close-modal="modalVisible = false"
  >
    <template #header>
      Politique de Protection des Données Personnelles
    </template>
    <template #body>
      Conformément au Règlement général sur la protection des données (RGPD)
      (UE) n°2016/679 du 27 avril 2016 et à la loi n°78-17 du 6 janvier 1978
      modifiée relative à l'informatique, aux fichiers et aux libertés, vous
      pouvez accéder aux données vous concernant ou demander leur effacement.
      Vous disposez également d'un droit d’opposition, d’un droit de
      rectification et d’un droit à la limitation du traitement de vos données.
      Pour exercer ces droits ou pour toute question sur le traitement de vos
      données, vous pouvez contacter le Délégué à la protection des données de
      Rennes (Ville et Métropole) via le formulaire de contact "e-démarches" du
      site internet (http://metropole.rennes.fr) ou par voie postale à adresser
      à Madame la Présidente de Rennes Métropole - A l'attention du Délégué à la
      protection des données, 4 avenue Henri Fréville - CS93111 - 35031 Rennes
      Cedex Plus d’informations sur : https://www.cnil.fr
    </template>
  </UiModal>
</template>
