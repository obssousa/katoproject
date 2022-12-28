<template>
    <div class="content">
        <el-row class="logo" justify="center">
            <img class="image" src="@/assets/kato.png" />
        </el-row>
        <el-row class="description" justify="center">
            <div class="column">
                <el-popover
                    placement="top"
                    title="Primeiro mandamento"
                    :width="200"
                    trigger="hover"
                    content="Esforçar-se para a formação do caráter."
                >
                    <template #reference>
                        <h3 class="kanjin"> 一、人格完成に努むること </h3>
                    </template>
                </el-popover>
            </div>
            <div class="column">
                <el-popover
                    placement="top"
                    title="Segundo mandamento"
                    :width="200"
                    trigger="hover"
                    content="Fidelidade para com o verdadeiro caminho da razão."
                >
                    <template #reference>
                        <h3 class="kanjin"> 一、誠の道を守ること </h3>
                    </template>
                </el-popover>
            </div>
            <div class="column">
                <el-popover
                    placement="top"
                    title="Terceiro mandamento"
                    :width="200"
                    trigger="hover"
                    content="Desenvolver a persistência e o esforço."
                >
                    <template #reference>
                        <h3 class="kanjin"> 一、努力の精神を養うこと </h3>
                    </template>
                </el-popover>
            </div>
            <div class="column">
                <el-popover
                    placement="top"
                    title="Quarto mandamento"
                    :width="200"
                    trigger="hover"
                    content="Respeito acima de tudo."
                >
                    <template #reference>
                        <h3 class="kanjin"> 一、礼儀を重んずること </h3>
                    </template>
                </el-popover>
            </div>
            <div class="column">
                <el-popover
                    placement="top"
                    title="Quinto mandamento"
                    :width="200"
                    trigger="hover"
                    content="Conter o espírito de agressão destrutiva."
                >
                    <template #reference>
                        <h3 class="kanjin"> 一、血気の勇を戒むること </h3>
                    </template>
                </el-popover>
            </div>
        </el-row>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content {
    padding: 20px;

    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        height: 360px;
        padding: 20px 0px;
        color: var(--el-color-white);

        .image {
            max-width: 300px;
        }
    }

    .description {
        gap: 30px;
        .column {
            display: flex;
            flex-direction: row;
            justify-content: center;

            .kanjin {
                writing-mode: vertical-rl;
                cursor: pointer;

                &:hover {
                    text-shadow: 1px 1px 4px var(--el-color-black);
                }
            }

            .text {
                writing-mode: vertical-rl;
                text-orientation: upright;
            }

            .title {
                // text-shadow: 2px 2px 2px black;
            }
        }
    }
}

@media (max-width: 550px)
{
    .content {
        .description {
            gap: 0px;

            .kanjin {
                margin: 14px;
            }
        }
    }
}
</style>
