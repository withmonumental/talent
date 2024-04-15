import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as a}from"./app-8c14eb64.js";const r={},d=a('<h2 id="creer-une-application-client-serveur-utilisant-de-la-rpa" tabindex="-1"><a class="header-anchor" href="#creer-une-application-client-serveur-utilisant-de-la-rpa" aria-hidden="true">#</a> Créer une application client/serveur utilisant de la RPA.</h2><h2 id="participants-au-projet" tabindex="-1"><a class="header-anchor" href="#participants-au-projet" aria-hidden="true">#</a> Participants au projet</h2><table><thead><tr><th>Identifiant</th><th>Nom</th></tr></thead><tbody><tr><td>TH0</td><td>ORE GUIEMANE PRINCE-MICHAEL</td></tr><tr><td>TH0</td><td>KOUASSI Abonouhan Christ</td></tr><tr><td>TH0</td><td>Angui David hermas</td></tr><tr><td>TH0</td><td>KONE Ousmane</td></tr></tbody></table><p>Currently, Monumental only generates digital certificates based on the ERC721 standard.</p><p>When creating a digital certificate, Monumental offers two distinct choices:</p><ul><li>Either the standard edition,</li><li>Or the community edition,</li><li>Or the liberty edition.</li></ul><p>The source code was published and verified. It is available on Etherscan.</p><h2 id="standard-edition" tabindex="-1"><a class="header-anchor" href="#standard-edition" aria-hidden="true">#</a> Standard edition</h2><p>A standard edition allows you to create a limited number of tokens per artwork.<br> This implies that the owner has to mint each edition before to proceed a sale.</p><p>The following sections describe what kind of information has to be filled by the artist.</p><h3 id="artwork-information" tabindex="-1"><a class="header-anchor" href="#artwork-information" aria-hidden="true">#</a> Artwork information</h3><table><thead><tr><th>Field name</th><th>Description</th></tr></thead><tbody><tr><td>Collection</td><td>Add artwork to a collection (optional)</td></tr><tr><td>Edition name</td><td>Base name used for all editions</td></tr><tr><td>Description</td><td>Artwork description. Support markdown</td></tr></tbody></table><h3 id="artwork-settings" tabindex="-1"><a class="header-anchor" href="#artwork-settings" aria-hidden="true">#</a> Artwork settings</h3><table><thead><tr><th>Field name</th><th>Description</th></tr></thead><tbody><tr><td>Max supply</td><td>Max number of editions that could be mint</td></tr><tr><td>Royalties</td><td>Artist royalties</td></tr><tr><td>Medium</td><td>Category of the artwork</td></tr><tr><td>Keywords</td><td>List of keywords (optional)</td></tr></tbody></table><h3 id="attributes-settings" tabindex="-1"><a class="header-anchor" href="#attributes-settings" aria-hidden="true">#</a> Attributes settings</h3><table><thead><tr><th>Field name</th><th>Description</th></tr></thead><tbody><tr><td>Trait Type</td><td>Can be see as the attribute title</td></tr><tr><td>Display type</td><td>Available display<br> - text<br>- number<br>- date<br>- boost %<br>- boost number</td></tr><tr><td>Value</td><td>user defined expression</td></tr></tbody></table><h2 id="community-edition" tabindex="-1"><a class="header-anchor" href="#community-edition" aria-hidden="true">#</a> Community edition</h2><p>the community edition has the same sections as the standard edition.<br> Below, the extra settings needed :</p><h3 id="community-settings" tabindex="-1"><a class="header-anchor" href="#community-settings" aria-hidden="true">#</a> Community settings</h3><table><thead><tr><th>Field name</th><th>Description</th></tr></thead><tbody><tr><td>Space</td><td>Space in which the mint will be done.<br>Defined by artist.</td></tr><tr><td>Basis price</td><td>Minimum price for a mint</td></tr><tr><td>Presale</td><td>Community edition can have a presale mode or a public sale mode. <br>See below if presale.</td></tr><tr><td>Nft per address limit</td><td><strong>Presale option.</strong><br>Max number of NFT that could be mint per address</td></tr><tr><td>Max mint amount</td><td><strong>Presale option.</strong><br>Max number of mint that could be performed at the same time</td></tr><tr><td>Whitelisted address</td><td><strong>Presale option.</strong><br>.List of whitelisted users authorized to mint before public sale</td></tr></tbody></table><h3 id="first-and-second-market" tabindex="-1"><a class="header-anchor" href="#first-and-second-market" aria-hidden="true">#</a> First and second market</h3><p>If an artist mints an edition for their own account, it will be available on the first market and all associated fees and commissions will be applied. <br><br> If the minting is done through an Ethereum address different from the artist&#39;s, the edition will be on the second market, and the community edition smart contract will allow the owner to operate with commissions and fees from the second market via an internal transfer.</p><h2 id="liberty-edition" tabindex="-1"><a class="header-anchor" href="#liberty-edition" aria-hidden="true">#</a> Liberty Edition</h2><p>Liberty Edition allows the promotion of digital works without fees. The digital certificate is generated with a delay, ensuring the artist&#39;s intellectual property and royalties.</p><p>Freedom Edition has the same fields as the standard edition.<br> Below are the additional fields required for preparing the edition.</p><h3 id="liberty-parameters" tabindex="-1"><a class="header-anchor" href="#liberty-parameters" aria-hidden="true">#</a> Liberty Parameters</h3><table><thead><tr><th>Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Space</td><td>Area in which the mint will be performed. Defined by the artist.</td></tr><tr><td>Base Price</td><td>Minimum price for a mint</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The full protection of the published work takes effect only after the first sale.<br> To prevent any unauthorized copies, Monumental restricts access to the original content, displaying a lower-quality visual version until the work is purchased for the first time. This measure aims to safeguard the artists&#39; work. It is essential to note that Monumental cannot be held responsible if malicious individuals manage to exploit information to obtain the complete version of the digital work.</p></div>',28),n=[d];function o(s,h){return e(),i("div",null,n)}const m=t(r,[["render",o],["__file","project05.html.vue"]]);export{m as default};
