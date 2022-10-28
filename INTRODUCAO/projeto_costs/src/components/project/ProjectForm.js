function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto..."/>
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total..."/>
            </div>
            <select name="category_id">
                <option selected disabled>Selecione a categoria...</option>
            </select>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}

export default ProjectForm