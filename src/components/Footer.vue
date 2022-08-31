<template>
    <footer>
        <ul>
            <li><router-link to="/">© MUME</router-link></li>
            <li><router-link to="/">06.12.23.56.78</router-link></li>
            <li><a href="mailto:contact@mume-massages.fr">contact@mume-massages.fr</a></li>
            <li><router-link to="/mentionslegales">Mentions légales</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </footer>
</template>

<script>
export default{
    name : "Footer"
}
</script>

<style scoped>
footer {
    font-style: normal;
    font-weight: lighter;
    text-align: center;
    font-size: 0.8em;
    margin: 1.5em auto;
    position: fixed;
    bottom: auto;
}
footer ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
footer ul li {
    padding: 0;
    margin: 0;
    display: flex;
}
footer a {
    display: inline-block;
    width: 100%;
    margin: 0 0 0 5px;
    padding: 0 5px;
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    line-height: 16px;
}
footer a:hover {
    border-color: #0c0c0c;
}
</style>