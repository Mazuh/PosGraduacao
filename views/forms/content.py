"""
Forms about content editing.
"""

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField,\
                    TextAreaField, DateTimeField, SubmitField,\
                    SelectField
from flask_wtf.file import FileField, FileRequired
from wtforms.fields.html5 import EmailField
from wtforms.validators import DataRequired, Email


class ParticipationsInEventsForm(FlaskForm):
    """
    Form for the list of participations in events.
    """
    title = StringField('Instituição visitada:', validators=[
        DataRequired('Digite uma chamada para o intercâmbio.')
    ])

    description = TextAreaField('Resumo do envolvimento:', validators=[
        DataRequired('Insira um breve resumo sobre a participação.')
    ])

    year = IntegerField('Ano:', validators=[
        DataRequired('Informe qual o ano do evento.')
    ])

    location = StringField('Cidade e país:', validators=[
        DataRequired('Falta localizar a cidade e país.')
    ])

    create = SubmitField('Adicionar')

class SubjectsForm(FlaskForm):
    """
    Form for list of subjects.
    """
    name = StringField('Nome da disciplina:', validators=[
        DataRequired('Digite o nome da disciplina.')
    ])

    description = TextAreaField('Resumo da disciplina:', validators=[
        DataRequired('Insira um breve resumo sobre a disciplina.')
    ])

    workload_in_hours = IntegerField('Carga Horária:', validators=[
        DataRequired('Informe a carga horária da disciplina.')
    ])

    credits = IntegerField('Creditos:', validators=[
        DataRequired('Informe quantos créditos a disciplina dá.')
    ])

    requirement = SelectField('Tipo de disciplina', choices=[('Obrigatórias','Obrigatórias'), ('Eletivas','Eletivas')], validators = [
        DataRequired('Insira o tipo da disciplina')
    ])

    create = SubmitField('Adicionar')

class StaffForm(FlaskForm):
    """
    Form for list of staff.
    """
    name = StringField('Nome do servidor:', validators=[
        DataRequired('Digite o nome do servidor.')
    ])

    rank = StringField('Posição do servidor:', validators=[
        DataRequired('Digite a posição do servidor.')
    ])

    abstract = TextAreaField('Resumo da formação caso da coordenação, e descrição do trabalho caso secretário:', validators=[
        DataRequired('Insira um breve resumo sobre a formação acadêmica do servidor.')
    ])

    function = SelectField('Tipo de servidor', choices=[('coordination','Coordenação'), ('secretariat','Secretáriado')], validators = [
        DataRequired('Insira o tipo de servidor')
    ])

    create = SubmitField('Adicionar')




class InstitutionsWithCovenantsForm(FlaskForm):
    """
    Form for the list of institutions with covenants.
    """
    name = StringField('Instituição com convênio:', validators=[
        DataRequired('Digite o nome da instituição.')
    ])

    initials = StringField('Sigla da Instituição:', validators=[
        DataRequired('Digite a sigla da instituição.')
    ])

    logo = FileField()

    create = SubmitField('Adicionar')

class ScheduledReportForm(FlaskForm):
    """
    Scheduled report form.
    """
    time = DateTimeField('Data e hora:', format='%d/%m/%Y %H:%M')

    title = StringField('Título do trabalho:', validators=[
        DataRequired('Digite o título do trabalho.')
    ])

    author = StringField('Autoria:', validators=[
        DataRequired('Digite o nome do(s) autor(es).')
    ])

    location = StringField('Localização:', validators=[
        DataRequired('Digite a localização.')
    ])

    create = SubmitField('Agendar')

class ProfessorForm(FlaskForm):
    """
    Form for adding professors to database
    """
    name = StringField('Nome do professor(a):', validators=[
        DataRequired('Digite o nome do professor(a).')
    ])

    rank = StringField('Rank do professor(a):', validators=[
        DataRequired('Digite o rank do professor(a).')
    ])
    
    lattes = StringField('Link para Lattes do professor(a):')

    email = EmailField('Email do professor(a):', validators=[
        DataRequired('Digite o Email do professor(a).'), Email()
        ])

    create = SubmitField('Adicionar')

class DocumentForm(FlaskForm):
    """
    Form for upload of document
    """
    title = StringField('Titulo do documento:', validators=[
        DataRequired('Digite o título do documento.')
    ])
    
    year = IntegerField('Ano:', validators=[
        DataRequired('Informe qual o ano do evento.')
    ])

    document = FileField()

    create = SubmitField('Adicionar')

    
